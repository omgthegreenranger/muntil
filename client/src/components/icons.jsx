import React from 'react';
import { TbChristmasTree } from 'react-icons/tb';
import { FaBirthdayCake, FaBriefcase } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { BiHealth } from 'react-icons/bi';

export default function Icon(props) {
    const { icon } = props;
    function Icons() {           
        switch (icon) {
            case "ChristmasTree":
                console.log("Yay!")
            return (
                <TbChristmasTree  />
            );
            case "BirthdayCake":
            return (
                <FaBirthdayCake />
            );
            case "Computer":
            return (
                <MdComputer />
            );
            case "default":
                return(
                <BiHealth />
            );
            default: 
            return (
                <BiHealth />
            );
            };
            }
    // compare the icon prop to our imported icons. If there, return with Import

    // if not, return with default icon

    return(
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <Icons />
        </IconContext.Provider>
    )
}