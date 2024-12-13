```javascript
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Routes>
        <Route path="/home/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

function About() {
  return <div>About</div>;
}

function Profile(){
  return(
    <div>Profile</div>
  );
}
```