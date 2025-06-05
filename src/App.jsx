// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { supabase } from './services/supabaseClient'
import Layout from './components/Layout/Layout'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <Layout>
      {user ? (
        <div>
          <p>Bienvenido {user.email}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <>
          <Login />
        </>
      )}
    </Layout>
  )
}

export default App
