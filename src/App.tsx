import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SubjectDetail from './pages/SubjectDetail';


export default function App() {
return (
<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/subject/:name" element={<SubjectDetail />} />
</Routes>
);
}