import React, { type PropsWithChildren } from "react";

export type ProgramsProps = PropsWithChildren & {
    date: string;
};

const Programs = ({ children, date }: ProgramsProps) => {
    return (
        <section className="section programs py-0 first:pt-5">
            <div className="container">
                <div className="row justify-center">
                    <div className="lg:col-10">
                        <div className="row lg:mt-0">
                            <div className="lg:col-3">
                                <h6 className="mb-4 pl-7 text-lg lg:mt-0 lg:pl-0 font-bold text-gray-900 dark:text-white">{date}</h6>
                            </div>
                            <div className="lg:col-9 lg:border-l border-text/10 lg:pb-10 lg:pl-10">
                                <div className="programs-content p-6 lg:p-0 space-y-3">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
