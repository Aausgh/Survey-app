import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import Questions from '../components/Questions';
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd';

const questions = [
    {
        id: 1,
        type: 'rating',
        rating: 5,
        question: 'How satisfied are you with our products?'
    },
    {
        id: 2,
        type: 'rating',
        rating: 5,
        question: 'How fair are the prices compared to similar retailers?'
    },
    {
        id: 3,
        type: 'rating',
        rating: 5,
        question: 'How satisfied are you with the value for money of your purchase?'
    },
    {
        id: 4,
        type: 'rating',
        rating: 10,
        question: 'On a scale of 1-10 how would you recommend us to your friends and family?'
    },
    {
        id: 5,
        type: 'text',
        question: 'What could we do to improve our service?'
    }
];

const Home = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [formData, setFormData] = useState({});
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const nav = useNavigate();

    const handleRatingChange = (value, id) => {
        setFormData({ ...formData, [id]: value });
    };

    const handleInputChange = (e, id) => {
        setFormData({ ...formData, [id]: e.target.value });
    };

    const handleNext = () => {
        setCurrentQuestion(prev => prev + 1);
    };

    const handlePrevious = () => {
        setCurrentQuestion(prev => prev - 1);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setOpen(true);
    };

    const handleOk = () => {

        setConfirmLoading(true);
        setTimeout(() => {
            const timestamp = new Date().getTime().toString();
            localStorage.setItem(timestamp, JSON.stringify(formData));
            nav("/thank-you")
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);

    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className='w-full h-full py-10'>
            <form
                className='w-1/2 shadow-xl rounded-xl border py-10 px-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                onSubmit={handleSubmit}
            >

                <h1 className='text-4xl font-bold text-center'>Customer Survey</h1>

                {questions.map((q, index) => (
                    index === currentQuestion && (
                        <Questions
                            q={q}
                            key={q.id}
                            length={questions.length}
                            rating={formData[q.id]}
                            setRating={value => handleRatingChange(value, q.id)}
                            input={formData[q.id]}
                            setInput={e => handleInputChange(e, q.id)}
                        />
                    )
                ))}

                <div className='w-full flex justify-around items-center'>
                    {currentQuestion > 0 && (
                        <p className='flex items-center gap-2 cursor-pointer' onClick={handlePrevious}>
                            <GrFormPreviousLink /> Previous
                        </p>
                    )}

                    {currentQuestion < questions.length - 1 ? (
                        <p className='flex items-center gap-2 cursor-pointer' onClick={handleNext}>
                            Next <GrFormNextLink />
                        </p>
                    ) : (
                        <button className='bg-blue-500 rounded-xl px-6 py-2 text-white' type='submit'>
                            Submit
                        </button>
                    )}
                </div>
            </form>

            <Modal
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                Do you want to save the feedback?
            </Modal>
        </div>
    );
};

export default Home;
