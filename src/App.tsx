import { ThemeProvider } from "styled-components"
import { Blog } from "./pages/Blog"
import { Post } from "./pages/Post"
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/themes/default"




function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {/* <Blog /> */}
      <Post />
     
    </ThemeProvider>
  )
}

export default App
