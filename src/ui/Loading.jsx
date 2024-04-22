/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Loading({ loading }) {
  return (
    <div className='flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto'>
      <p className='text-center text-3xl text-black'>{loading?.message}</p>
    </div>
  );
}
