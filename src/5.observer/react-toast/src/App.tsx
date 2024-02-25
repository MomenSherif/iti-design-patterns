import { Button } from './componnts/Button';
import { ToastContainer } from './componnts/ToastContainer';
import { toast } from './componnts/utils';

function App() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => toast('Toast with Default message')}>
          Default
        </Button>
        <Button onClick={() => toast.success('Toast with Success message')}>
          Success ✅
        </Button>
        <Button onClick={() => toast.error('Toast with Error message')}>
          Error ❌
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
