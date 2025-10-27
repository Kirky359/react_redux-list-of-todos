import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Loader, TodoFilter, TodoList, TodoModal } from './components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from './api';
import { setError, setLoading, setTodos } from './features/todos';
import { useAppSelector } from './app/hooks';

export const App = () => {
  const { isLoading } = useAppSelector(state => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    getTodos()
      .then(todos => dispatch(setTodos(todos)))
      .catch(() => dispatch(setError('failed to load data')));
  }, [dispatch]);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">{isLoading ? <Loader /> : <TodoList />}</div>
          </div>
        </div>
      </div>

      <TodoModal />
    </>
  );
};
