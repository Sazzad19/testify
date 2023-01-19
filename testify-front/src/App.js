
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layouts/Main/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin/Admin';
import AssessmentsList from './components/AssessmentsList/AssessmentsList';
import SubmissionList from './components/SubmissionList/SubmissionList';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Login></Login>
        },
        {
          path: 'home',
          loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'admin',
          element: <Admin></Admin>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'assessments',
          element: <AssessmentsList></AssessmentsList>
        },
        {
          path: 'submission',
          element: <SubmissionList></SubmissionList>
        },

        {
          path: 'home/quiz/:id',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizDetails></QuizDetails>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
    
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
