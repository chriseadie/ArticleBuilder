import React from 'react'
import AddArticleParts from './ArticleRenderer/AddArticleParts';
import { ArticleRenderSwitch } from './ArticleRenderer/ArticleRenderSwitch';
import { DependencyKey } from './Code/Interface';
import Register from './Code/Register';
import { RenderController } from './Controllers/RenderController';
import Provider from './Store/provider'
import { useStateProvider } from './Store/StateProvider/context';

export default function Application(){

    const [state,dispatch] = useStateProvider();

    Register.addSingleton(DependencyKey.State,dispatch);

    return (
        <div>
            {state.articleParts.map(pt => ArticleRenderSwitch(pt))}
            <AddArticleParts controller={new RenderController()}/>
        </div>
    )
}

