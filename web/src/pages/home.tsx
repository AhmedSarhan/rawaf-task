import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex justify-center items-center h-[80vh]">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/sign-up')}
        >
          Join us
        </button>
    </main>
  )
}

export default HomePage
