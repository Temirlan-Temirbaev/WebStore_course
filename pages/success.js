import React from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs'
import { useRouter } from 'next/router';
import {runFireWorks} from '../lib/utils'
const Success = () => {

    React.useEffect(() => {
        localStorage.clear();
        runFireWorks()
    }, [])

    return <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BsBagCheckFill /></p>
            <h2>Thank You for your order!</h2>
            <p className='email-msg'>Check your email inbox for the receipt.</p>
            <p className='description'>If you have any questions, please email 
            <a className='email' href='mailto:chinese-phones-premium@mail.ru'>Chinese-phones-premium@mail.ru</a></p>
            <Link href="/">
                <button type='button' width="300px" className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
}

export default Success;