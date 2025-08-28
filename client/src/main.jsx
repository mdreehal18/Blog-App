import { StrictMode } from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';
import AuthorProfile from './components/author/AuthorProfile.jsx';
import PostArticle from './components/author/PostArticle.jsx';
import ArticleByID from './components/common/ArticleByID.jsx';
import Articles from './components/common/Articles.jsx';
import Home from './components/common/Home.jsx';
import Signin from './components/common/Signin.jsx';
import Signup from './components/common/Signup.jsx';
import UserProfile from './components/user/UserProfile.jsx';
import './index.css';
// import UserAuthorContext from './contexts/UserAuthorContext.jsx';


const browserRouterObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />
      },
      {
        path: "signin",
        element: <Signin />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: "user-profile/:email",
        element: <UserProfile />,
        children: [
          {
            path: "articles",
            element: <Articles />
          },
          {
            path: ":articleId",
            element: <ArticleByID />
          },
          {
            path: "",
            element: <Navigate to="articles" />
          }
        ]
      },
      {
        path: "author-profile/:email",
        element: <AuthorProfile />,
        children: [
          {
            path: "articles",
            element: <Articles />
          },
          {
            path: ":articleId",
            element: <ArticleByID />
          },
          {
            path: 'article',
            element: <PostArticle />
          },
          {
            path: "",
            element: <Navigate to="articles" />
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={browserRouterObj} />
      
  </StrictMode>
)