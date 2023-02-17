import React from 'react'
import { ArcElement, Chart } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Label from './label'
import styles from '@/styles/Home.module.css'

Chart.register(ArcElement)
const config = {
    data: {
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10

        }]
    },
    options: {
        cutout: 115
    }
};

export default function Graph() {
    return (
        <div className='flex justify-content max-w-xs mx-auto py-10'>
            <div className='item'>
                <div className="chart relative">
                    <Doughnut {...config}></Doughnut>
                    <h3 className='mb-4 font-bold title absolute inset-y-0 top-28 left-32'>
                        Total
                        <span className='block text-3xl text-emerald-400'>Rp. {0}</span>
                    </h3>
                </div>

                <div className='flex flex-col py-10 gap-4'>
                    <Label></Label>
                </div>
            </div>
        </div>
    )
}
