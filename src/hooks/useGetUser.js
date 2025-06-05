import { useEffect, useState } from 'react';
import supabase from '../services/supabaseClient'

export const useGetUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const getUser = async () => {
        setIsLoading(true);
        const response = await supabase.auth.getSession();
        const user = {
            email: response?.data?.session?.user?.email ?? '',
            name: response?.data?.session?.user?.user_metadata?.name ?? '',
        }
        setUser(user);
        setIsLoading(false);
    };

    useEffect(() => {
        getUser();
    }, []);


    return { user, isLoading };

} 