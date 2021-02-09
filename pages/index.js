import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Box,
  Heading,
  Flex,
  Image,
  Input,
  HStack,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
  PhoneIcon,
  Avatar,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { css, jsx } from '@emotion/react'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import React, { useState } from 'react'

const InputCss = css`
  border-color: #dfe1e5;
  border-radius: 23px;
  height: 46px;
  width: 100%;
  box-shadow: none;
  padding: 0 30px 0 45px;
  &:focus {
    border: none;
    box-shadow: 0 1px 6px rgba(223, 225, 229, 0);
  }
`

const AvatarCss = css`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #f3f3f3;
  text-align: center;
  line-height: 50px;
  display: inline-block;
  cursor: pointer;
`
export default function Home() {
  const data = [
    { name: 'GitHub', path: 'https://github.com' },
    { name: 'GitHub', path: 'https://github.com' },
    { name: 'GitHub', path: 'https://github.com' },
    { name: 'GitHub', path: 'https://github.com' },
    { name: 'GitHub', path: 'https://github.com' },
    { name: 'GitHub', path: 'https://github.com' },
  ]
  const [collectList, setCollectList] = useState([])
  const [name, setName] = useState('')
  const [path, setPath] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const addList = () => {
    setCollectList(
      collectList.push({
        name,
        path,
      })
    )
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="500px" mx="auto" mt="100px" overflow="hidden">
        <Flex w="500px" justifyContent="center">
          <Image src="/logo.png" w="320px" h="112px"></Image>
        </Flex>
        <Flex mt="20px">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              left="17px"
              top="14px"
              color="#9aa0a6"
              fontSize="18px"
              children={<AiOutlineSearch />}
            />
            <Input type="text" css={InputCss} />
          </InputGroup>
        </Flex>
        <Flex mt="20px" flexWrap="wrap">
          {data.map(item => (
            <Box
              key={item.path}
              href={item.path}
              w="100px"
              textAlign="center"
              flexShrink="0"
            >
              <Box css={AvatarCss}>
                <Link href={item.path} isExternal>
                  <Avatar
                    src={`${item.path}/favicon.ico`}
                    p="10px"
                    maxH="50px"
                  />
                </Link>
              </Box>
              <Text fontSize="12px">{item.name}</Text>
            </Box>
          ))}
          <Box w="100px" textAlign="center" flexShrink="0">
            <Box css={AvatarCss} onClick={onOpen}>
              <AiOutlinePlus />
            </Box>
            <Text fontSize="12px">添加快捷方式</Text>
          </Box>
        </Flex>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>添加快捷方式</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>名称</FormLabel>
              <Input
                ref={initialRef}
                placeholder="名称"
                value={name}
                onChange={ev => setName(ev.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>网址</FormLabel>
              <Input
                placeholder="网址"
                value={path}
                onChange={ev => setPath(ev.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              完成
            </Button>
            <Button onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
