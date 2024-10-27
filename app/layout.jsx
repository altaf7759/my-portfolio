import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import React from 'react'
import '@/styles/globals.css'

const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

function Layout({ children }) {
    return (
        <html lang='en'>
            <body>
                <main className='app'>
                    <Nav />
                    {children} 
                    <Footer />
                </main>
            </body>
        </html>
    )
}

export default Layout