import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonationBreakdown = () => {
  const data = {
    labels: ['Program Services', 'Operational Costs', 'Future Projects'],
    datasets: [
      {
        label: 'Donation Breakdown',
        data: [75, 15, 10],
        backgroundColor: ['#8b4513', '#cda45e', '#e0b484'],
        borderColor: ['#8b4513', '#cda45e', '#e0b484'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: {
            family: 'Poppins',
            size: 14,
          },
        },
      },
    },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="text-center text-3xl font-medium uppercase tracking-[0.4rem] text-[#8b4513] mb-8">
          Where Your Donation Goes
        </h2>

        {/* Card Container */}
        <div className="w-full mx-auto bg-white rounded-lg shadow-lg md:w-4/5 lg:w-3/4 shadow-gray-300 drop-shadow-2xl">
          <div className="flex flex-col pt-20 pb-20 md:flex-row ">
            {/* Chart Container */}
            <div className="w-full md:w-1/2 h-[300px] p-6">
              <Pie data={data} options={options} />
            </div>

            {/* Breakdown Explanation */}
            <div className="w-full p-6 md:w-1/2">
              <h3 className="mb-4 text-xl font-semibold ">
                Transparency is at the heart of our work. Your contributions go directly toward:
              </h3>
              <ul className="space-y-4 text-black">
                <li>
                  <span className="font-bold text-[#8b4513]">75% Program Services:</span> Supporting our ongoing humanitarian efforts.
                </li>
                <li>
                  <span className="font-bold text-[#cda45e]">15% Operational Costs:</span> Ensuring our teams have the resources to deliver aid efficiently.
                </li>
                <li>
                  <span className="font-bold text-[#e0b484]">10% Future Projects:</span> Investing in innovative solutions to solve long-term challenges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationBreakdown;
