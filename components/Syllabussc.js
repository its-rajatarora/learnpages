'useclient'
import React from 'react'

import Link from 'next/link';


export default function Syllabussc() {
    return (
        <div>
            <div className="p-12 flex flex-col justify-center">
                <div className="">
                    <h1 className='p-4 text-4xl font-extrabold bg-orange-500'>Class 12th </h1>
                </div>
                <div className=" pt-6">
                    <p className='text-start'>For all students, the syllabus for Class 12 will serve as a guide to help them determine what to learn and which topics are relevant. Using the term-wise CBSE Class 12 Syllabus, students will prepare and analyze what topics have been covered. All students in Class 12 need to study according to the 2024-25 term-wise syllabus to pass the final exam. We at Vedantu have provided the CBSE Class 12 term-wise syllabus for all subjects to guide you for studying. To download the syllabus as a PDF, simply download it free of charge. <br />

                        The Central Board Of Secondary Education (CBSE) 2024-25: CBSE has released the revised syllabus for the Class 12 All Subjects board exam. CBSE is an autonomous, self-governing body established under the Department of Education (D.O.Ed). CBSE Revised Syllabus 2024-25 for Class 12 All Subjects board exam covers all subjects including Physics, Chemistry, Mathematics and Biology. 
                        </p>
                </div>
                <div className="pt-6 items-center justify-center ml-12">
                    <table className="table-auto  border-collapse border border-gray-500">
                        <tbody>
                                <Link href='pages/math12'>
                                <tr className='w-full'>
                                    <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Maths</a></td>
                                </tr>
                                </Link>
                                <Link href='pages/physics12'>
                                <tr>
                                
                                    <td className="border border-gray-500 p-2">CBSE Term Wise Syllabus for Class 12 Physics</td>
                                    
                                </tr>
                            </Link>
                            <Link href='pages/chemistry12'>
                                <tr>
                                    <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Chemistry</a></td>
                                </tr>
                                </Link>
                                <Link href='pages/biology12'>
                                <tr>
                                    <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Biology</a></td>
                                </tr>
                                </Link>
                         
                            <Link href='pages/english12'>
                            <tr>
                                <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 English</a></td>
                            </tr>
                            </Link>
                            <Link href='pages/hindi12'>
                            <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Hindi</a></td>
                        </tr>
                        </Link>
                        <Link href='pages/accountancy12'>
                        <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Accountancy</a></td>
                        </tr>
                        </Link>
                        <Link href='pages/businessstudies12'>
                        <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Business Studies</a></td>
                        </tr>
                        </Link>
                        <Link href='pages/economics12'>
                        <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Economics</a></td>
                        </tr>
                        </Link> 
                        <Link href='pages/politicalscience12'>
                        <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Political Science</a></td>
                        </tr>
                        </Link>
                        {/* <tr>
                            <td className="border border-gray-500 p-2"><a href="">CBSE Term Wise Syllabus for Class 12 Physical Education</a></td>
                        </tr> */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
