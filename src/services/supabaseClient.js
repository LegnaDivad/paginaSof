// Local stub for Supabase client to allow offline usage
// Stores a fake session in localStorage and provides minimal auth methods

const EVENT_NAME = 'local-auth-change';

function getSession() {
  const raw = localStorage.getItem('session');
  return raw ? JSON.parse(raw) : null;
}

function setSession(session) {
  if (session) {
    localStorage.setItem('session', JSON.stringify(session));
  } else {
    localStorage.removeItem('session');
  }
  window.dispatchEvent(new Event(EVENT_NAME));
}

export const supabase = {
  auth: {
    async getSession() {
      return { data: { session: getSession() } };
    },
    async getUser() {
      return { data: { user: getSession()?.user || null } };
    },
    async signOut() {
      setSession(null);
      return { error: null };
    },
    async signInWithOAuth() {
      const user = {
        email: 'offline@example.com',
        user_metadata: { name: 'Usuario Local' },
      };
      setSession({ user });
      return { data: { user }, error: null };
    },
    async signUp({ email }) {
      const user = { email, user_metadata: { name: email.split('@')[0] } };
      setSession({ user });
      return { error: null };
    },
    onAuthStateChange(callback) {
      const handler = () => {
        callback('LOCAL', { user: getSession()?.user || null });
      };
      window.addEventListener(EVENT_NAME, handler);
      return {
        data: {
          subscription: {
            unsubscribe: () => window.removeEventListener(EVENT_NAME, handler),
          },
        },
      };
    },
  },
};

export default supabase;
