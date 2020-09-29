import React, { useState, useEffect} from 'react'
import ReactHtmlParser from 'react-html-parser'; 

export default function Card(props) {
    const [card_content, setCard_content] = useState('Slack is a team communication tool, that brings together all of your team communications in one place, instantly searchable and available wherever you go.');
    

    useEffect(() => {
        setCard_content(props.content)
    }, [])

    // add ellipses to card content
    const renderContent = () => {
        let info = null;
        (card_content.length > 150) ? info = card_content.substring(0,150) + ' ...' : info = card_content;
        return info;
    }
    return (
        <>


            <div className="arow">
                <div className="acol-md-12">
                    <div className="row space-16">&nbsp;</div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="thumbnail">
                                <div className="caption text-center" onClick="location.href='https://flow.microsoft.com/en-us/connectors/shared_slack/slack/'">
                                    <div className="position-relative">
                                        <img src="https://az818438.vo.msecnd.net/icons/slack.png" style={{width:"100px",height:"90px"}} />
                                    </div>
                                    <h4 id="thumbnail-label"><a href="https://flow.microsoft.com/en-us/connectors/shared_slack/slack/" target="_blank">Microsoft Slack</a></h4>
                                    <p><i className="glyphicon glyphicon-user light-red lighter bigger-120"></i>&nbsp;Auditor</p>
                                    <div className="thumbnail-description smaller"> { ReactHtmlParser(card_content) } </div>
                                </div>
                                <div className="caption card-footer text-center">
                                    <ul className="list-inline">
                                        <li><i className="people lighter"></i>&nbsp;7 Active Users</li>
                                        <li></li>
                                        <li><i className="glyphicon glyphicon-envelope lighter"></i><a href="#">&nbsp;Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
