
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [repo, setRepo] = useState([])
  const [repoContent, setRepoContent] = useState([])
  const [repoContents, setRepoContents] = useState([])

  try {
    useEffect(() => {
      fetch('https://api.github.com/users/SudhirYadav5678')
        .then(response => response.json())
        .then(data => {
          setData(data)
        })

      fetch('https://api.github.com/users/SudhirYadav5678/repos').then(
        response => response.json()
      ).then(repo => {
        setRepo(repo)
      })

      fetch(`https://api.github.com/repos/SudhirYadav5678/${repoContent}/contents`)
        .then(response => response.json())
        .then(repoContents => {
          console.log(repoContents);
          setRepoContents(repoContents)
        })

    }, [])
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div className='flex mt-10'>

        <div className='border-r-2 border-t-2 w-[300px] ml-3'>
          <div className='m-5'>
            <h1 className='text-2xl mb-2'>Contact</h1>
            <ul>
              <li className='p-2'>Phone No. :- +918860861785</li>
              <li className='p-2'>Email :- sudhirkyadav51@gmail.com</li>
              <li className='p-2'>Github :-<a href="https://github.com/SudhirYadav5678" target='blanck'>SudhirYadav5678</a></li>
              <li className='p-2'>X :-<a href="https://x.com/SudhirYadav5678" target='blanck'>SudhirYadav5678</a></li>
            </ul>
          </div>

          <hr className='m-3' />
          <div className='m-5'>
            <h1 className='text-2xl mb-2'>Skills</h1>
            <ul className='list-disc'>
              <li>Frontend: React, Redux, Next.js, HTML, CSS, JavaScript</li>
              <li>Backend: Node.js, Express, FastAPI, Django</li>
              <li>Databases: MongoDB, MySQL</li>
              <li>Languages: Python, Java, C++, TypeScript</li>
              <li>Tools & DevOps: Docker, Git</li>
            </ul>
          </div>
          <hr className='m-3' />
          <div className='m-5'>
            <h1 className='text-2xl mb-2'>Eduction</h1>
            <p>Bsc IGNOU</p>
          </div>
        </div>

        <div className='w-[800px] mx-auto'>
          <h1 className='flex justify-center font-bold text-5xl capitalize hover:uppercase'>Sudhir Kumar</h1>
          <p className='flex justify-center font-sans'>FullStack Developer</p>
          <hr className='ml-4 mr-4 h-5 mt-5' />
          <div>
            <h1 className='text-3xl mb-3'>About</h1>
            <p>Hello! I am Sudhir Kumar, a passionate and versatile software developer with a strong foundation in both frontend and backend technology. With knowledge of modern development frameworks and languages ​including TypeScript, JavaScript, Python, Java etc. I build applications that are highly efficient, scalable and easy to use I specialize in full stack development with frameworks like Node.js, Express, Django, React for mobile development, In addition to frontend libraries like Next.js and React Native, my background experience includes strong knowledge of databases like MongoDB and MySQL, and containerization using Docker is also included.</p>
          </div>

          <div>
            <h1 className='text-3xl mb-3 mt-5'>Project Overview</h1>
            <div>
              <div className='ml-5 '>{repoContent}</div>
              <div>
                {
                  repoContents.map((c, i) => (
                    <div key={i}><div className='w-[400px] h-[400px]'>{c.links.readMe.md}</div></div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className='border-l-2 border-t-2 w-[300px]'>
          <div className='m-5'>
            <h1 className='text-2xl mb-2'>Github</h1>
            <div className='flex '>
              <img className='w-12 rounded-full' src={data.avatar_url} alt="Git picture" />
              <div className='flex flex-col ml-3'><p>Github Followers:- {data.followers}</p>
                <p>Github Repositery:- {data.public_repos}</p></div>
            </div>

            <h1 className='text-2xl mb-2 mt-2'>Projects</h1>
            <div className='overflow-scroll h-[600px]'>
              {
                repo.map((c, i) => (
                  <div key={i}><div onClick={() =>
                    (setRepoContent(c.name))
                  } className='w-[250px] h-12 border-2 mx-auto bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl shadow-md text-center m-2'><span>{i + 1} {c.name}</span></div></div>
                ))
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
