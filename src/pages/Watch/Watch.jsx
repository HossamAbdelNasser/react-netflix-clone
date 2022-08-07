import './watch.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BB from './video/BB.mp4'

const Watch = () => {

    const video = 'https://rr3---sn-uxaxjvhxbt2u-j5pe7.googlevideo.com/videoplayback?expire=1654807990&ei=VQmiYsDFIZWuxN8P8cWOyAI&ip=197.57.23.91&id=o-ACGVP5poe2coNFiHR1UKRg7UL3Oea6FS_zfMvNLGqTCm&itag=133&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=zF&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pe7%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=3&pl=19&initcwndbps=413750&spc=4ocVC59fONfQui6YYrtFqu-S45vjfTZyB7bZIDtWdsIp&vprv=1&mime=video%2Fmp4&ns=xkC7_-Kb37IF3PCU0CMzAucG&gir=yes&clen=1339980&dur=175.633&lmt=1628741724843012&mt=1654786150&fvip=2&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535434&n=OJ_ArczhoC2AgQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBJe-raBcbcli73pioZPEFpcNpBQQciTztKL4dXGiiQUCIHEfllzaZSD3GvYVo7LTrlZkYB58zQzOC2wMiINPW-AN&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAOgZ1K-yzG3w3pe3O2h5IqiPK3St1Amm3akgd1X3ljpHAiEA_jqA1TveTytFMhxwMeh5mMZVQeJ3nijSMiKSHgpuMYk%3D';


  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon className='arrow'/>
        </div>
        <video 
        className="video" 
        src={BB}  
        progress controls type="video/mp4" />
        

    </div>
  )
}

export default Watch