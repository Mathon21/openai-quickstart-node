import Head from 'next/head';
import {useState} from 'react';
import styles from './index.module.scss';
import {Button} from 'antd';
import {openApiPost, PostType} from '@/pages/api';

export default function Home() {
  const [animalInput, setAnimalInput] = useState('')
  const [result, setResult] = useState()
  const actionList = ['completions', 'edits', 'images'];
  const [placeholder, setPlaceholder]= useState('请输入内容')

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({animal: animalInput}),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }


      setResult(data.result);
      setAnimalInput('');
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error)
      // alert(error.message);
    }
  }
  const buttonClick = (type:string)=>{
    switch (type) {
      case 'completions':
        console.log(type)
        openApiPost(animalInput, PostType.completions)
        break;
      case 'edits':
        console.log(type)
        break;
      case 'images':
        console.log(type)
        setPlaceholder('请输入图片内容')
        break;
      default:
        break;

    }

  }

  return (
    <div>
      <Head>
        <title>OpenAI</title>
        <link rel="icon" href="/dog.png"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.buttonView}>
          {actionList.map(item => (
            <Button
              key={item}
              size="small"
              onClick={() => buttonClick(item)}
              className={styles.btn}
            >
              {item}
            </Button>
          ))}
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder={placeholder}
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names"/>
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}

