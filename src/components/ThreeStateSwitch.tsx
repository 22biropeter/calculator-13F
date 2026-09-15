import style from './ThreeStateSwitch.module.css'
import { useTheme } from '../context/ThemeContextProvider'

const ThreeStateSwitch = () => {
  const { theme, nextTheme } = useTheme();

  return (
    <>
      <div className={style.switch} onClick={nextTheme}>
        <div
          className={style.ball}
          style={{ transform: `translateX(${theme * 30}px)` }}
        ></div>
      </div>
    </>
  )
}

export default ThreeStateSwitch