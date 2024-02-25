import { useState } from 'react';
import './App.css';
import Select from './components/Select';
import TestComponentHOC from './components/TestComponentHOC';
import TestComponentHooks from './components/TestComponentHooks';
import { DropdownMenu, FlyOut } from './components/DropdownMenu';

function App() {
  const [selectedLang, setSelectedLang] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex flex-col items-start space-y-1">
        <p className="text-sm">Person:</p>
        <Select
          selected={selectedPerson}
          onSelect={setSelectedPerson}
          options={[
            { label: 'Ahmed', value: 'ahmed' },
            { label: 'Mohamed', value: 'mohamed' },
            { label: 'Kareem', value: 'kareem' },
          ]}
        />
      </div>

      <div className="flex flex-col items-start space-y-1">
        <p className="text-sm">Language</p>
        <Select
          selected={selectedLang}
          onSelect={setSelectedLang}
          options={[
            {
              label: 'HTML',
              value: 'html',
              img: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
            },
            {
              label: 'CSS',
              value: 'css',
              img: '   https://cdn-icons-png.flaticon.com/512/11516/11516361.png ',
            },
            {
              label: 'JavaScript',
              value: 'js',
              img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
            },
          ]}
          renderOption={option => (
            <>
              <img
                src={option.img}
                className="w-6 h-6 object-contain rounded-full"
                alt=""
              />
              <span>{option.label}</span>
            </>
          )}
        />
      </div>
    </div>
  );
}

export default App;
