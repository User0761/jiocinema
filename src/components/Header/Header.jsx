import styles from './header.module.css'
import JCLogo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceSearchIcon from '../../assets/voice-search.svg'
import jioIcon from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import Show from '../show/Show'

const Header = (props) => {

    let [searchTitle,setSearchTitle] = useState("");
    let [filteredMovies,setFilteredMovies]=useState([])

    useEffect(()=>{

        if(searchTitle!=="")
        {
            let filterMovies = props.movies.filter((movie)=>{
                return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase())==0
            })
    
            setFilteredMovies(filterMovies)
        }
        else
        {
            setFilteredMovies([])
        }

        


    },[searchTitle])


  return (
    <>
        <header className={styles.header}>

                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src={JCLogo} alt='logo'/>
                        <div className={styles.premium}>
                           <img src={crown} alt="image" /> 
                           <p>Go Premium</p>
                        </div>
                    </div>

                    <ul className={styles.navLinks}>
                        <li>Home</li>
                        <li>Sports</li>
                        <li>Movies</li>
                        <li>TV Shows</li>
                        <li>More</li>
                    
                    

                    </ul>

                </nav>

                <div className={styles.search}>

                        <div className={styles.searchBox}>
                            <div className={styles.headerIcon}>
                                <img src={searchIcon} alt="icon" />
                            </div>

                            <input type="text" 
                            onChange={(event)=>{
                                setSearchTitle(event.target.value)
                            }}
                            className={styles.searchInput} placeholder='Movies, Shows and more ' />

                            <div className={styles.headerIcon}>
                                <img src={voiceSearchIcon} alt="icon" />
                            </div>
                        </div>
                        <img className={styles.usericon} src={jioIcon} alt="icon" />

                </div>

        </header>


        {
            filteredMovies.length!==0?(
                <div className={styles.searchResults}>
                            
                        {
                            filteredMovies.map((movie)=>{
                                return <Show key={movie} movie={movie}/>
                            })
                        }

                </div>
            ):null
        }

        


    </>
  )
}

export default Header