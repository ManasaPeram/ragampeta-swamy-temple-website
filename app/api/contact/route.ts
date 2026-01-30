import { NextRequest, NextResponse } from 'next/server'

// For production, use a proper email service like SendGrid, AWS SES, or Resend
// This is a simplified version - you'll need to configure your email service

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // For now, log the submission
    console.log('Contact Form Submission:', { name, email, message })

    // TODO: Integrate with email service
    // Example with Resend (https://resend.com):
    // 
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // 
    // await resend.emails.send({
    //   from: 'noreply@ragampetatemple.com',
    //   to: process.env.TEMPLE_EMAIL || 'ragampetatemple@example.com',
    //   replyTo: email,
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Message</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `
    // })

    // Send confirmation email to user (optional)
    console.log(`Confirmation email would be sent to: ${email}`)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will contact you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
