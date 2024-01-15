import React, { useEffect, useState } from 'react';
import './App.css'
import ToolbarComponent from './components/Toolbar';
import { Box, Typography } from '@mui/material';
import FooterComponent from './components/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

function App() {
  return (
    <>
      <Box>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '64px', zIndex: 999 }}>
          <ToolbarComponent />
        </Box>
        <RouterProvider router={router} />
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100vw', height: '50px', overflow: 'hidden', zIndex: 999 }}>
          <FooterComponent />
        </Box>
      </Box>
    </>
  )
}

export default App;
