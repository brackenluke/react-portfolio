import { useState } from 'react';
import PortfolioForm from './PortfolioForm';

function portfolio(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.portfolio);

  const submitUpdate = (value) => {
    props.editPortfolioItem(edit.id, value);
    setEdit({ id: null, value: '', eagerness: '' });
  };

  if (edit.id) {
    return <PortfolioForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.portfolio.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `portfolio-row complete ${item.eagerness}`
          : `portfolio-row ${item.eagerness}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completePortfolioItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
        <p onClick={() => props.removePortfolioItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default portfolio;
