import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

---
Sent from your portfolio website
    `.trim();

    // For now, we'll use a simple approach with a service like EmailJS or similar
    // You can also use services like SendGrid, Mailgun, or your own SMTP server
    
    // This is a placeholder - you'll need to implement actual email sending
    // For now, we'll just log the message and return success
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Implement actual email sending
    // You can use services like:
    // - EmailJS (client-side)
    // - SendGrid
    // - Mailgun
    // - Your own SMTP server
    
    // For now, we'll simulate sending an email to vsskkv@gmail.com
    // In a real implementation, you would use a service like SendGrid or Nodemailer
    
    const emailToSend = {
      to: 'vsskkv@gmail.com',
      subject: 'New Contact Form Submission - Portfolio Website',
      body: emailContent,
      from: email,
      name: name
    };
    
    // Log the email details (in production, this would be sent via email service)
    console.log('Email to be sent:', emailToSend);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
} 