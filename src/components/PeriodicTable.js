import React, { useState } from 'react';
import '../PeriodicTable.css';

const elementsData = [
	{ id: 1, atomicNumber: 1, symbol: 'H', name: 'Водород', atomicWeight: 1.008 },
	{ id: 2, atomicNumber: 2, symbol: 'He', name: 'Гелий', atomicWeight: 4.0026 },
	{ id: 3, atomicNumber: 3, symbol: 'Li', name: 'Литий', atomicWeight: 6.94 },
	{ id: 4, atomicNumber: 4, symbol: 'Be', name: 'Бериллий', atomicWeight: 9.0122 },
	{ id: 5, atomicNumber: 5, symbol: 'B', name: 'Бор', atomicWeight: 10.81 },
	{ id: 6, atomicNumber: 6, symbol: 'C', name: 'Углерод', atomicWeight: 12.011 },
	{ id: 7, atomicNumber: 7, symbol: 'N', name: 'Азот', atomicWeight: 14.007 },
	{ id: 8, atomicNumber: 8, symbol: 'O', name: 'Кислород', atomicWeight: 15.999 },
	{ id: 9, atomicNumber: 9, symbol: 'F', name: 'Фтор', atomicWeight: 18.998 },
	{ id: 10, atomicNumber: 10, symbol: 'Ne', name: 'Неон', atomicWeight: 20.180 },
	{ id: 11, atomicNumber: 11, symbol: 'Na', name: 'Натрий', atomicWeight: 22.990 },
	{ id: 12, atomicNumber: 12, symbol: 'Mg', name: 'Магний', atomicWeight: 24.305 },
	{ id: 13, atomicNumber: 13, symbol: 'Al', name: 'Алюминий', atomicWeight: 26.982 },
	{ id: 14, atomicNumber: 14, symbol: 'Si', name: 'Кремний', atomicWeight: 28.085 },
	{ id: 15, atomicNumber: 15, symbol: 'P', name: 'Фосфор', atomicWeight: 30.974 },
	{ id: 16, atomicNumber: 16, symbol: 'S', name: 'Сера', atomicWeight: 32.06 },
	{ id: 17, atomicNumber: 17, symbol: 'Cl', name: 'Хлор', atomicWeight: 35.45 },
	{ id: 18, atomicNumber: 18, symbol: 'K', name: 'Калий', atomicWeight: 39.098 },
	{ id: 19, atomicNumber: 19, symbol: 'Ar', name: 'Аргон', atomicWeight: 39.948 },
	{ id: 20, atomicNumber: 20, symbol: 'Ca', name: 'Кальций', atomicWeight: 40.078 },
	{ id: 21, atomicNumber: 21, symbol: 'Sc', name: 'Скандий', atomicWeight: 44.956 },
	{ id: 22, atomicNumber: 22, symbol: 'Ti', name: 'Титан', atomicWeight: 47.867 },
	{ id: 23, atomicNumber: 23, symbol: 'V', name: 'Ванадий', atomicWeight: 50.942 },
	{ id: 24, atomicNumber: 24, symbol: 'Cr', name: 'Хром', atomicWeight: 51.996 },
	{ id: 25, atomicNumber: 25, symbol: 'Mn', name: 'Марганец', atomicWeight: 54.938 },
	{ id: 26, atomicNumber: 26, symbol: 'Fe', name: 'Железо', atomicWeight: 55.845 },
	{ id: 27, atomicNumber: 27, symbol: 'Ni', name: 'Никель', atomicWeight: 58.693 },
	{ id: 28, atomicNumber: 28, symbol: 'Co', name: 'Кобальт', atomicWeight: 58.933 },
	{ id: 29, atomicNumber: 29, symbol: 'Cu', name: 'Медь', atomicWeight: 63.546 },
	{ id: 30, atomicNumber: 30, symbol: 'Zn', name: 'Цинк', atomicWeight: 65.38 },
	{ id: 31, atomicNumber: 31, symbol: 'Ga', name: 'Галлий', atomicWeight: 69.723 },
	{ id: 32, atomicNumber: 32, symbol: 'Ge', name: 'Германий', atomicWeight: 72.630 },
	{ id: 33, atomicNumber: 33, symbol: 'As', name: 'Мышьяк', atomicWeight: 74.922 },
	{ id: 34, atomicNumber: 34, symbol: 'Se', name: 'Селен', atomicWeight: 78.971 },
	{ id: 35, atomicNumber: 35, symbol: 'Br', name: 'Бром', atomicWeight: 79.904 },
	{ id: 36, atomicNumber: 36, symbol: 'Kr', name: 'Криптон', atomicWeight: 83.798 },
	{ id: 37, atomicNumber: 37, symbol: 'Rb', name: 'Рубидий', atomicWeight: 85.468 },
	{ id: 38, atomicNumber: 38, symbol: 'Sr', name: 'Стронций', atomicWeight: 87.62 },
	{ id: 39, atomicNumber: 39, symbol: 'Y', name: 'Иттрий', atomicWeight: 88.906 },
	{ id: 40, atomicNumber: 40, symbol: 'Zr', name: 'Цирконий', atomicWeight: 91.224 },
	{ id: 41, atomicNumber: 41, symbol: 'Nb', name: 'Ниобий', atomicWeight: 92.906 },
	{ id: 42, atomicNumber: 42, symbol: 'Mo', name: 'Молибден', atomicWeight: 95.95 },
	{ id: 43, atomicNumber: 43, symbol: 'Tc', name: 'Технеций', atomicWeight: 98.0 },
	{ id: 44, atomicNumber: 44, symbol: 'Ru', name: 'Рутений', atomicWeight: 101.07 },
	{ id: 45, atomicNumber: 45, symbol: 'Rh', name: 'Родий', atomicWeight: 102.91 },
	{ id: 46, atomicNumber: 46, symbol: 'Pd', name: 'Палладий', atomicWeight: 106.42 },
	{ id: 47, atomicNumber: 47, symbol: 'Ag', name: 'Серебро', atomicWeight: 107.87 },
	{ id: 48, atomicNumber: 48, symbol: 'Cd', name: 'Кадмий', atomicWeight: 112.41 },
	{ id: 49, atomicNumber: 49, symbol: 'In', name: 'Индий', atomicWeight: 114.82 },
	{ id: 50, atomicNumber: 50, symbol: 'Sn', name: 'Олово', atomicWeight: 118.71 },
	{ id: 51, atomicNumber: 51, symbol: 'Sb', name: 'Сурьма', atomicWeight: 121.76 },
	{ id: 52, atomicNumber: 52, symbol: 'Te', name: 'Теллур', atomicWeight: 127.60 },
	{ id: 53, atomicNumber: 53, symbol: 'I', name: 'Иод', atomicWeight: 126.90 },
	{ id: 54, atomicNumber: 54, symbol: 'Xe', name: 'Ксенон', atomicWeight: 131.29 },
	{ id: 55, atomicNumber: 55, symbol: 'Cs', name: 'Цезий', atomicWeight: 132.91 },
	{ id: 56, atomicNumber: 56, symbol: 'Ba', name: 'Барий', atomicWeight: 137.33 },
	{ id: 57, atomicNumber: 57, symbol: 'La', name: 'Лантан', atomicWeight: 138.91 },
	{ id: 58, atomicNumber: 58, symbol: 'Ce', name: 'Церий', atomicWeight: 140.12 },
	{ id: 59, atomicNumber: 59, symbol: 'Pr', name: 'Празеодим', atomicWeight: 140.91 },
	{ id: 60, atomicNumber: 60, symbol: 'Nd', name: 'Неодим', atomicWeight: 144.24 },
	{ id: 61, atomicNumber: 61, symbol: 'Pm', name: 'Прометий', atomicWeight: 145.0 },
	{ id: 62, atomicNumber: 62, symbol: 'Sm', name: 'Самарий', atomicWeight: 150.36 },
	{ id: 63, atomicNumber: 63, symbol: 'Eu', name: 'Европий', atomicWeight: 151.96 },
	{ id: 64, atomicNumber: 64, symbol: 'Gd', name: 'Гадолиний', atomicWeight: 157.25 },
	{ id: 65, atomicNumber: 65, symbol: 'Tb', name: 'Тербий', atomicWeight: 158.93 },
	{ id: 66, atomicNumber: 66, symbol: 'Dy', name: 'Диспрозий', atomicWeight: 162.50 },
	{ id: 67, atomicNumber: 67, symbol: 'Ho', name: 'Гольмий', atomicWeight: 164.93 },
	{ id: 68, atomicNumber: 68, symbol: 'Er', name: 'Эрбий', atomicWeight: 167.26 },
	{ id: 69, atomicNumber: 69, symbol: 'Tm', name: 'Тулий', atomicWeight: 168.93 },
	{ id: 70, atomicNumber: 70, symbol: 'Yb', name: 'Иттербий', atomicWeight: 173.04 },
	{ id: 71, atomicNumber: 71, symbol: 'Lu', name: 'Лютеций', atomicWeight: 174.97 },
	{ id: 72, atomicNumber: 72, symbol: 'Hf', name: 'Гафний', atomicWeight: 178.49 },
	{ id: 73, atomicNumber: 73, symbol: 'Ta', name: 'Тантал', atomicWeight: 180.95 },
	{ id: 74, atomicNumber: 74, symbol: 'W', name: 'Вольфрам', atomicWeight: 183.84 },
	{ id: 75, atomicNumber: 75, symbol: 'Re', name: 'Рений', atomicWeight: 186.21 },
	{ id: 76, atomicNumber: 76, symbol: 'Os', name: 'Осмий', atomicWeight: 190.23 },
	{ id: 77, symbol: 'Ir', name: 'Iridium' },
	{ id: 78, symbol: 'Pt', name: 'Platinum' },
	{ id: 79, symbol: 'Au', name: 'Gold' },
	{ id: 80, symbol: 'Hg', name: 'Mercury' },
	{ id: 81, symbol: 'Tl', name: 'Thallium' },
	{ id: 82, symbol: 'Pb', name: 'Lead' },
	{ id: 83, symbol: 'Bi', name: 'Bismuth' },
	{ id: 84, symbol: 'Po', name: 'Polonium' },
	{ id: 85, symbol: 'At', name: 'Astatine' },
	{ id: 86, symbol: 'Rn', name: 'Radon' },
	{ id: 87, symbol: 'Fr', name: 'Francium' },
	{ id: 88, symbol: 'Ra', name: 'Radium' },
	{ id: 89, symbol: 'Ac', name: 'Actinium' },
	{ id: 90, symbol: 'Th', name: 'Thorium' },
	{ id: 91, symbol: 'Pa', name: 'Protactinium' },
	{ id: 92, symbol: 'U', name: 'Uranium' },
	{ id: 93, symbol: 'Np', name: 'Neptunium' },
	{ id: 94, symbol: 'Pu', name: 'Plutonium' },
	{ id: 95, symbol: 'Am', name: 'Americium' },
	{ id: 96, symbol: 'Cm', name: 'Curium' },
	{ id: 97, symbol: 'Bk', name: 'Berkelium' },
	{ id: 98, symbol: 'Cf', name: 'Californium' },
	{ id: 99, symbol: 'Es', name: 'Einsteinium' },
	{ id: 100, symbol: 'Fm', name: 'Fermium' },
	{ id: 101, symbol: 'Md', name: 'Mendelevium' },
	{ id: 102, symbol: 'No', name: 'Nobelium' },
	{ id: 103, symbol: 'Lr', name: 'Lawrencium' },
	{ id: 104, symbol: 'Rf', name: 'Rutherfordium' },
	{ id: 105, symbol: 'Db', name: 'Dubnium' },
	{ id: 106, symbol: 'Sg', name: 'Seaborgium' },
	{ id: 107, symbol: 'Bh', name: 'Bohrium' },
	{ id: 108, symbol: 'Hs', name: 'Hassium' },
	{ id: 109, symbol: 'Mt', name: 'Meitnerium' },
	{ id: 110, symbol: 'Ds', name: 'Darmstadtium' },
	{ id: 111, symbol: 'Rg', name: 'Roentgenium' },
	{ id: 112, symbol: 'Cn', name: 'Copernicium' },
	{ id: 113, symbol: 'Nh', name: 'Nihonium' },
	{ id: 114, symbol: 'Fl', name: 'Flerovium' },
	{ id: 115, symbol: 'Mc', name: 'Moscovium' },
	{ id: 116, symbol: 'Lv', name: 'Livermorium' },
	{ id: 117, symbol: 'Ts', name: 'Tennessine' },
	{ id: 118, symbol: 'Og', name: 'Oganesson' },
  ];

  const PeriodicTable = () => {
	const [selectedElement, setSelectedElement] = useState(null);
  
	const handleElementClick = (element) => {
	  setSelectedElement(element);
	};
  
	return (
	  <div className="periodic-table">
		{elementsData.map((element) => (
		  <div
			key={element.id}
			className={`element ${selectedElement === element ? 'selected' : ''}`}
			onClick={() => handleElementClick(element)}
		  >
			<div className="atomic-number">{element.atomicNumber}</div>
			<div className="atomic-weight">{element.atomicWeight}</div>
			<div className="symbol">{element.symbol}</div>
			<div className="name">{element.name}</div>
		  </div>
		))}
	  </div>
	);
  };
  
  export default PeriodicTable;
