
// import { createClient } from '@/utils/supabase/client';
// import { Session, User } from '@supabase/supabase-js';

// import { create } from 'zustand'
// type StateType = {
//     getUser:() =>Promise< User | null>;
//     getSession: () => Promise< Session | null>;
// }

// const supabase  = () => createClient();
// const session  = async () => {
//     const {
//         data: { session },
//       } = await supabase().auth.getSession();
//     return session
// }
// export const useSession
//  = create<StateType>(() => ({
//     getUser:async () =>{
//         const {
//             data: { user },
//           } = await supabase().auth.getUser();
//         return user
//     } ,
//     getSession: async () => {
//         const {
//             data: { session },
//           } = await supabase().auth.getSession();
//         return session
//     }
// }))
