import React, { FC, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import route from '@/route'
console.log(route)
const App: FC = ({ children }) => {
  return (<div className='app-container' id="inner_app">
       <Suspense fallback={null}>
        <Switch>
            {
            route.map((v: any, i) => {
                console.log(v)
                const r = (a: any, b: number) => (
                    <Route
                    key = { a.path }
                    exact = { a.exact }
                    path = { a.path }
                    component = { a.component }
                    />
                )
                console.log(r)
                return (
                    (!v.children ? r(v, i) : <Route
                        path = { v.path }
                        key = { v.path }
                        render = {() => <v.component>
                            <Switch>
                                { v.children.map((k, j) => r(k, j)) }
                                <Redirect to={v.redirect} />
                            </Switch>
                        </v.component>}
                    />)
                )
            })
            }
            { children }
            <Redirect to="/" />
        </Switch>
      </Suspense>
  </div>)
}

export default App