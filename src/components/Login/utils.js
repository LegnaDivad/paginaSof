import supabase  from '../../services/supabaseClient'

export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return error;
}

export const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    });

    return {data, error};
};
