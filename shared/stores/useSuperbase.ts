
import { createClient } from '@/utils/supabase/server';

import { create } from 'zustand'
type StateType = {

    user: any;
}

const supabase  = () => createClient();
export const useSuperbase
 = create<StateType>(() => ({
    user:async () =>{
        const {
            data: { user },
          } = await supabase().auth.getUser();
        return user
    } 
}))
