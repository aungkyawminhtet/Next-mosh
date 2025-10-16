import { NextRequest } from "next/server";
import { Resend } from "resend";
import WelcomeTextTemplate from "../../../../emails/WelcomeTextTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest){
    await resend.emails.send({
        from: '',
        to: 'aung244348@gmail.com',
        subject: 'Welcome to my AK Email',
        react: <WelcomeTextTemplate name="Aung Kyaw" />
    })
}