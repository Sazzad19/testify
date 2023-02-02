import { createBrowserRouter } from "react-router-dom";
import Admin from "../../Admin/Admin";
import AssessmentsList from "../../components/AssessmentsList/AssessmentsList";
import EditAssessments from "../../components/EditAssessments/EditAssessments";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import QuizDetails from "../../components/QuizDetails/QuizDetails";
import SignUp from "../../components/SignUp/SignUp";
import AssessmentDetalis from "../../components/Student/AssessmentDetails/AssessmentDetalis";
import StudentAssessment from "../../components/Student/StudentAssessment/StudentAssessment";
import SubmissionList from "../../components/SubmissionList/SubmissionList";
import Main from "../../layouts/Main/Main";
import CommonPrivateRoute from "../CommonPrivateRoute/CommonPrivateRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TeacherPrivateRoure from "../TeacherPrivateRoute/TeacherPrivateRoure";



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
          element: <TeacherPrivateRoure><Admin></Admin></TeacherPrivateRoure>
        },
        {
          path: '/assessments/edit/:id',
          element: <TeacherPrivateRoure><EditAssessments></EditAssessments></TeacherPrivateRoure>
        },
        {
          path: 'signUp',
          element:<SignUp></SignUp>
        },
        {
          path: 'assessments',
          element: <TeacherPrivateRoure><AssessmentsList></AssessmentsList></TeacherPrivateRoure>
        },
        {
          path: 'assessments-student',
          element: <PrivateRoute><StudentAssessment></StudentAssessment></PrivateRoute>
        },
        {
          path: 'assessments-student/assessments/details/:id',
          element: <PrivateRoute><AssessmentDetalis></AssessmentDetalis></PrivateRoute>
        },
        {
          path: 'submission',
          element: <CommonPrivateRoute><SubmissionList></SubmissionList></CommonPrivateRoute>
        },

      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
    
  ]);