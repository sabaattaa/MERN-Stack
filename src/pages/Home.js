import React from 'react'
import Header1 from '../componets/header1'
import Card from '../componets/Card'
import Footer from '../componets/Footer'

export default function Home() {
    return (
        <>
            <div className=''>
                <Header1 />
                <div className='flex flex-row'><input /><label>search item</label></div>
                <div className='flex flex-row '>
                    <Card src={"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRurcN_-KHfGuKc2KBQPShq34qqClg3CDRDMB6KJ_yOq6eJdt57tPWVnRT2Wg8wgVemtPaW4H3BwedhOkdybPo"} tital={"Pizza"} des={"this is the Pizad food"} />
                    <Card src={"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRurcN_-KHfGuKc2KBQPShq34qqClg3CDRDMB6KJ_yOq6eJdt57tPWVnRT2Wg8wgVemtPaW4H3BwedhOkdybPo"} tital={"Pizza"} des={"this is the Pizad food"} />
                    <Card src={"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRurcN_-KHfGuKc2KBQPShq34qqClg3CDRDMB6KJ_yOq6eJdt57tPWVnRT2Wg8wgVemtPaW4H3BwedhOkdybPo"} tital={"Pizza"} des={"this is the Pizad food"} />

                </div>
                {/* <Footer /> */}
            </div>

        </>
    )
}
