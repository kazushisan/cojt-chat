// atoms
import Button from './atoms/Button.vue'
import Input from './atoms/Input.vue'
import SelectBox from './atoms/SelectBox.vue'
import ChatBubble from './atoms/ChatBubble.vue'
import UserImage from './atoms/UserImage.vue'

// molecules
import MessageListItem from './molecules/MessageListItem.vue'
import MessageInput from './molecules/MessageInput.vue'
import UserListItem from './molecules/UserListItem.vue'

// organisms
import Header from './organisms/Header.vue'

<<<<<<< HEAD
// pages
import Home from './pages/Home.vue'

export const atoms = { Button, Input, SelectBox, ChatBubble, UserImage }
=======
export const atoms = { Button, Input, ChatBubble, UserImage }
>>>>>>> master

export const molecules = { MessageListItem, MessageInput, UserListItem }

export const organisms = { Header }
