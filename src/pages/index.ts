import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import CheckToken from './Authentication/CheckToken';
import MypageMain from './MyPage/Main';
import ScrapList from './MyPage/ScrapList';
import ScrapDetail from './MyPage/ScrapDetail';
import Chat from './Chat'

export const Authentication = {
    SignIn,
    SignUp,
    CheckToken
}

export const Mypage = {
    MypageMain,
    ScrapList,
    ScrapDetail
}

export const Chatting = {
    Chat
}