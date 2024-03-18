import React from 'react';
import { Rate, Input } from 'antd';

const { TextArea } = Input;

const Questions = ({ q, length, rating, setRating, input, setInput }) => {

    return (
        <div key={q.id} className='w-[80%] h-[40vh] mx-auto flex flex-col justify-evenly'>
            <p className='text-end font-bold'>{q.id}/{length}</p>

            <p className='text-center text-3xl'>{q.id}. {q.question}</p>

            {q.type === 'rating' && (
                <div className='flex justify-around items-center'>
                    <Rate
                        character={({ index }) => (
                            <span
                                className={`p-3 `}
                            >
                                {index + 1}
                            </span>
                        )}
                        count={q.rating}
                        value={rating}
                        onChange={setRating}
                        className='text-4xl flex '
                    />

                </div>
            )}

            {q.type === 'text' && (
                <TextArea
                    rows={4}
                    type='text'
                    name='input'
                    placeholder='Write any suggestion'
                    className='w-[80%] mx-auto border border-black rounded px-4 py-2'
                    value={input}
                    onChange={setInput}
                ></TextArea>
            )}
        </div>
    );
};

export default Questions;
