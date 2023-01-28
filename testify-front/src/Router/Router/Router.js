import { createBrowserRouter } from "react-router-dom";
import Admin from "../../Admin/Admin";
import AssessmentsList from "../../components/AssessmentsList/AssessmentsList";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import QuizDetails from "../../components/QuizDetails/QuizDetails";
import SignUp from "../../components/SignUp/SignUp";
import SubmissionList from "../../components/SubmissionList/SubmissionList";
import Main from "../../layouts/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


  export const router = createBrowserRouter([
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
          element:<SignUp></SignUp>
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