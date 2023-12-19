import * as stylex from '@stylexjs/stylex';

import Button from './components/Button';

const styles = stylex.create({
  headText: {
    fontSize: 20,
    color: 'red',
  },
  custom: {
    margin: '1em',
  },
});

function App() {
  return (
    <>
      <h1 {...stylex.props(styles.headText)}>Vite + React</h1>
      <Button variant="danger" styles={styles.custom}>
        Save
      </Button>
    </>
  );
}

export default App;
