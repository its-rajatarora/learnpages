'useclient'
import React from 'react'

import Link from 'next/link';


export default function Sllyabus() {
    return (
        <div>
            <div className="p-12 flex flex-col justify-center">
                <div className="">
                    <h1 className='p-4 text-4xl font-extrabold bg-orange-500'>Class 10th </h1>
                </div>
                <div className=" pt-6">
                <p className='text-start'>CBSE Syllabus for Class 10 for the 2023-24 academic year has been released by the board. The CBSE Class 10 Syllabus is a valuable resource for students preparing for board exams. It includes the course structure, distribution of unit marks and number of periods allocated for each unit. Along with this, the CBSE Syllabus for Class 10 also provides information about reference books, projects, assignments and practicals. A thorough understanding of the CBSE Syllabus for Class 10 will help students plan their studies better. Here, we have provided the links to all major subjects of the CBSE Class 10 Syllabus PDF. Covering the CBSE syllabus for students of Class 9 will help them enhance their academic knowledge for better learning outcomes</p>
            </div>
            <div className="pt-6 items-center justify-center ml-12">
                <table className="table-auto  border-collapse border border-gray-500">
                    <tbody>
                        <Link className='w-full' href="/pages/math">
                        <tr className='w-full'>
                            <td className="border border-gray-500 p-2"><a href="">CBSC Syllabus for class 10 Maths</a></td>
                        </tr>
                        </Link>
                        <Link  href="/pages/science">
                        <tr>
                       
                            <td className="border border-gray-500 p-2">CBSC Syllabus for class 10 Science</td>
                       
                        </tr>
                        </Link>
                        <Link href="/pages/socialscience">
                        <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSC Syllabus for class 10 Social Science</a></td>
                        </tr>
                        </Link> 
                        <Link href="/pages/english">
                        <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSC Syllabus for class 10 English</a></td>
                        </tr>
                        </Link> 
                        <Link href="/pages/hindi">                        <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSC Syllabus for class 10 Hindi </a></td>
                        </tr>
                        </Link>

                        {/* <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSC Syllabus for class 10 Hindi B</a></td>
                        </tr> */}
                        {/* <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSC Syllabus for class 10 Information Technology</a></td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
        </div >
    )
}
