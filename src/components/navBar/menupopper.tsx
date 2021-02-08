import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { onLogout } from "../../redux/actions/generalActions";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../redux/reducers";
import { useHistory } from "react-router";
import { ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  })
);

const MenuListComposition = () => {
  const dispatch = useDispatch();
  const navigation = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const { existEmployeeProfile } = useSelector(
    (state: ApplicationState) => state.profileEmployeeReducers
  );
  const { existEmployerProfile } = useSelector(
    (state: ApplicationState) => state.profileEmployerReducers
  );

  const handleLogOut = () => {
    dispatch(onLogout());
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Profile
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {existEmployeeProfile ? (
                      <>
                        <MenuItem onClick={handleClose}>
                          <Link href={"/profileempy/edit"}>Edit Profile</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>My Apliances</MenuItem>
                      </>
                    ) : null}
                    {existEmployerProfile ? (
                      <div>
                         <MenuItem onClick={handleClose}>
                        <Link href={"/profileempy/edit"}>Edit Profile</Link>
                      </MenuItem>
                      
                      <MenuItem onClick={handleClose}>
                        <Link href={"/myJobs"}>
                        My Jobs 
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link href={"/addJob"}>
                          Add Job
                        </Link>
                      </MenuItem>
                      </div>
                       
                      
                        
                      
                    ) : null}
                    <MenuItem onClick={handleLogOut}>
                      <ExitToApp/>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default MenuListComposition;
