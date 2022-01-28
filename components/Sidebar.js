import { Avatar, IconButton, Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth, db } from '../firebase'
import * as EmailValidator from 'email-validator'

export default function Sidebar() {

    const createChat = () => {
        const email = prompt('Please enter an email to start a conversation.')

        if (!email) return

        if (EmailValidator.validate(email)) {

        }

    }

    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    <IconButton onClick={() => auth.signOut()}>
                        <ExitToAppIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in Chat" />
            </Search>
            <SidebarButton onClick={createChat}>
                Start a new chat
            </SidebarButton>
        </Container>
    )
}

const Container = styled.div`
    flex: 0.45;
    border-right: 1px solid whitesmoke;
    height: 100vh;
    min-width: 300px;
    max-width: 350px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

const ChatLoading = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0px;
`

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    outline: none;
    border: none;
    flex: 1;
`;

const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-bottom: 1px solid whitesmoke;
        border-top: 1px solid whitesmoke;
    }
`;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

const IconsContainer = styled.div``;