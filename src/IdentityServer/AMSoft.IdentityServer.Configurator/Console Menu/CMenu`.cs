using System;
using System.Collections.Generic;

namespace AMSoft.IdentityServer.Configurator.Console_Menu
{
    public class CMenu:List<MenuEntry>
    {
        public MenuType Type { get; private set; }

        public CMenu(MenuType type, params MenuEntry[] entries)
        {
            AddRange(entries);
            Type = type;
            if ((Type == MenuType.UpperLetters || Type == MenuType.LowerLetters) && this.Count > 26)
                throw new ArgumentOutOfRangeException("If 'Letters' is chosen as the MenuType, the entries should be equal or less than 26!");
        }

        /// <summary>
        /// Returns a string with the menu printed on it
        /// </summary>
        /// <param name="separatorChar">This is the char which separates the Letter/Number from the description</param>
        /// <param name="finalChar">This is the char which is always put at the end of each Entry description (I.E. the last char to be appended to the description of each entry)</param>
        /// <returns></returns>
        public string PrintMenu(char separatorChar = '.', char finalChar = '\n')
        {
            string menu = "";
            char letter = Type == MenuType.LowerLetters ? 'a' : 'A';
            ushort numbers = 0;
            foreach (MenuEntry me in this)
            {
                switch (Type)
                {
                    case MenuType.LowerLetters:
                    case MenuType.UpperLetters:
                        menu += $"{letter++}{separatorChar} {me.Description}{finalChar}";
                        Console.WriteLine($"{letter}{separatorChar} {me.Description}{finalChar}");
                        break;
                    case MenuType.Numbers:
                        menu += $"{numbers++}{separatorChar} {me.Description}{finalChar}";
                        Console.WriteLine($"{numbers}{separatorChar} {me.Description}{finalChar}");
                        break;
                }
            }
            return menu;
        }

        /// <summary>
        /// Returns a string with the menu printed on it
        /// </summary>
        /// <param name="separatorString">This is the string which separates the Letter/Number from the description</param>
        /// <param name="finalString">This is the string which is always put at the end of each Entry description (I.E. the last string to be appended to the description of each entry)</param>
        /// <returns></returns>
        public string PrintMenu(string separatorString = ".", string finalString = "\n")
        {
            string menu = "";
            char letter = Type == MenuType.LowerLetters ? 'a' : 'A';
            ushort numbers = 0;
            foreach (MenuEntry me in this)
            {
                switch (Type)
                {
                    case MenuType.LowerLetters:
                    case MenuType.UpperLetters:
                        menu += $"{letter++}{separatorString} {me.Description}{finalString}";
                        Console.WriteLine($"{letter}{separatorString} {me.Description}{finalString}");
                        break;
                    case MenuType.Numbers:
                        menu += $"{numbers++}{separatorString} {me.Description}{finalString}";
                        Console.WriteLine($"{numbers}{separatorString} {me.Description}{finalString}");
                        break;
                }
            }
            return menu;
        }
        /// <summary>
        /// This will execute an entry characterised by the letter given in input (the letter of the menu)
        /// It returns false if the index is out of range
        /// </summary>
        /// <param name="letter">The correspondant letter of the menu</param>
        public bool ExecuteEntry(char letter)
        {
            if (Type == MenuType.LowerLetters)
            {
                int index = letter - 97;
                if (index >= Count)
                {
                    return false;
                }
                this[index].ExecuteEntry();
            }
            else if (Type == MenuType.UpperLetters)
            {
                int index = letter - 65;
                if (index >= Count)
                {
                    return false;
                }
                this[index].ExecuteEntry();
            }
            return true;
        }
        /// <summary>
        /// This will execute the entry characterised by the menu index given
        /// It returns false if the index is out of range
        /// </summary>
        /// <param name="menuIndex">Index of the entry in the menu</param>
        public bool ExecuteEntry(int menuIndex)
        {
            if (menuIndex > this.Count)
            {
                return false;
            }
            this[menuIndex-1].ExecuteEntry();
            return true;
        }
        /// <summary>
        /// This will execute an Entry based on its index in the Menuthis list. To be used only for debugging purposes.
        /// </summary>
        /// <remarks>This method is not intended to be normally used! Use <see cref="ExecuteEntry">ExecuteEntry</see> instead </remarks>
        /// <param name="listIndex">The index of the Entry in the list</param>
        public void ExecuteEntryWithListIndex(int listIndex)
        {
            this[listIndex].ExecuteEntry();
        }
    }
}
