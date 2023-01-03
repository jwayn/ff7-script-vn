import styles from './App.module.css';
import Dialogue from './components/Dialogue';
import parseCsv from './util/parseCsv';
import Options from './components/Options';
import Backlog from './components/Backlog';
import { createSignal, onMount } from 'solid-js'

function App() {
  const [textSpeed, setTextSpeed] = createSignal(localStorage.getItem('textSpeed') || 70);
  const [customBackgroundColor, setCustomBackgroundColor] = createSignal(false);
  const [useCustomBackgroundColor, setUseCustomBackgroundColor] = createSignal(false);
  const [currentDialoguePage, setCurrentDialoguePage] = createSignal(0);
  const [showBacklog, setShowBacklog] = createSignal(false);
  const [showOptions, setShowOptions] = createSignal(false);

  let ticking = false;
  onMount(async () => {
    document.addEventListener("wheel", (event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (event.deltaY < 0 && showBacklog() === false) setShowBacklog(true);
          ticking = false;
        });

        ticking = true;
      }
    });

  
    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          if(showBacklog() !== true) {
            setShowOptions(!showOptions());
          } else {
            setShowBacklog(false);
          }
        }
    });
  });


  const data = parseCsv();
  return (
    <div class={styles.App}>
      <Options 
        setTextSpeed={setTextSpeed} 
        textSpeed={textSpeed} 
        customBackgroundColor={customBackgroundColor} 
        setCustomBackgroundColor={setCustomBackgroundColor} 
        useCustomBackgroundColor={useCustomBackgroundColor} 
        setUseCustomBackgroundColor={setUseCustomBackgroundColor}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
      />
      <Backlog showBacklog={showBacklog} setShowBacklog={setShowBacklog} currentDialoguePage={currentDialoguePage} setCurrentDialoguePage={setCurrentDialoguePage} data={data} />
      <Dialogue 
        data={data} 
        textSpeed={textSpeed} 
        customBackgroundColor={customBackgroundColor} 
        useCustomBackgroundColor={useCustomBackgroundColor} 
        currentDialoguePage={currentDialoguePage} 
        setCurrentDialoguePage={setCurrentDialoguePage}
      />
    </div>
  );
}

export default App;
