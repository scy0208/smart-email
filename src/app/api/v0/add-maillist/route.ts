import { RequestCookies } from "@edge-runtime/cookies";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@/utils/supabase';

type RequestData = {
    email: string;
}

export const runtime = 'edge';


export async function addEmail(email: string) {
    try {
        const supabase = createClient()
        await supabase.from('email_list')
            .upsert({ email })
    } catch (error) {
        // Handle errors that occurred during the API request
        console.error("An error occurred while fetching the purchase link:", error);
        return JSON.stringify([]);
    }
}

export async function POST( req:Request ) {
    const { email } =  (await req.json()) as RequestData
    await addEmail(email)
    return new Response(JSON.stringify({ message: 'OK' }), { status: 200 });
}