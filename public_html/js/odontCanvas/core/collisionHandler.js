/* 
 * Copyright (c) 2018 Bardur Thomsen <https://github.com/bardurt>.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Bardur Thomsen <https://github.com/bardurt> - initial API and implementation and/or initial documentation
 */

function CollisionHandler()
{
    
}

/**
 * Method to handle a collision with a tooth
 * @param {type} tooth
 * @param {type} argument
 * @returns {undefined}
 */
CollisionHandler.prototype.handleCollision = function(tooth, argument)
{

    console.log("Handle collision");
    
    if(argument === "21")
    {
        
        if(tooth.id !== "28" && tooth.id !== "38" && tooth.id !== "65" && tooth.id !== "75")
        {
            tooth.toggleDamage(argument);
        }
        
    }
    else if(argument !== "0" && argument !== "13" && argument !== "14")
    {
        tooth.toggleDamage(argument);
    }
    
    
};

/**
 * Method to handle a collision with a checkbox
 * @param {type} checkBox
 * @param {type} argument
 * @returns {undefined}
 */
CollisionHandler.prototype.handleCollisionCheckBox = function(checkBox, argument)
{

    if(argument === "13")
    {
        if(checkBox.state === 1)
        {
            checkBox.state = 0;
        }
        else
        {
            checkBox.state = 1;
        }
      
    }
    else if(argument === "14")
    {
         if(checkBox.state === 2)
        {
            checkBox.state = 0;
        }
        else
        {
            checkBox.state = 2;
        }
    }

};
