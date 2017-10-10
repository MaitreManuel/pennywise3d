export default THREE => {
    // material
    const black = new THREE.MeshPhongMaterial({
        color: '#000000',
    });
    const blue = new THREE.MeshPhongMaterial({
        color: '#5ba7bf',
    });
    const grey_light = new THREE.MeshPhongMaterial({
        color: '#d9d9d9',
    });
    const red = new THREE.MeshPhongMaterial({
        color: '#9b2525',
    });
    const white = new THREE.MeshPhongMaterial({
        color: '#ffffff',
    });

    const group_head = new THREE.Group();
    const bloc_head = new THREE.Mesh(new THREE.BoxGeometry(30, 30, 20), white);

    group_head.add(bloc_head);

    // ******* EYES ******* //
    const group_eye_left = new THREE.Group();
    const eye_border = new THREE.Mesh(new THREE.CircleGeometry(4, 25), black);
    const eye_sclera = new THREE.Mesh(new THREE.CircleGeometry(3.5, 25), white);
    const eye_iris = new THREE.Mesh(new THREE.CircleGeometry(2, 25), blue);
    const eye_pupil = new THREE.Mesh(new THREE.CircleGeometry(1, 25), black);

    group_eye_left.add(eye_border);
    group_eye_left.add(eye_sclera);
    group_eye_left.add(eye_iris);
    group_eye_left.add(eye_pupil);
    eye_border.position.z = .2;
    eye_sclera.position.z = .3;
    eye_iris.position.z = .4;
    eye_pupil.position.z = .5;

    const group_eye_right = group_eye_left.clone();

    var eyelid_leftShape = new THREE.Shape();

    eyelid_leftShape.moveTo(-6.6, 2);
    eyelid_leftShape.bezierCurveTo(-5, 7.5, 3, 2, 0, -1);

    const eyelid_left = new THREE.Mesh(new THREE.ShapeGeometry(eyelid_leftShape), black);

    group_eye_left.add(eyelid_left);
    eyelid_left.position.set(3.4, -0.5, .5);

    var eyelid_rightShape = new THREE.Shape();

    eyelid_rightShape.moveTo(-4.6, -1);
    eyelid_rightShape.bezierCurveTo(-7, 6.5, 1, 5, 1.5, 3);

    const eyelid_right = new THREE.Mesh(new THREE.ShapeGeometry(eyelid_rightShape), black);

    group_eye_right.add(eyelid_right);
    eyelid_right.position.set(1.4, -1, .5);

    // ******************** //

    // ******* LINES-UP ******* //
    const group_line_up1 = new THREE.Group();
    const lineup1 = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.5), red);
    const lineup2 = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.5), red);
    const lineup3 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.5), red);
    const lineup4 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.5), red);
    const lineup5 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.75), red);
    const lineup6 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 1), red);
    const lineup7 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 1.5), red);
    const lineup8 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 2), red);

    group_line_up1.add(lineup1);
    group_line_up1.add(lineup2);
    lineup2.position.y = -0.5 ;
    group_line_up1.add(lineup3);
    lineup3.position.y = -1 ;
    group_line_up1.add(lineup4);
    lineup4.position.y = -1.5 ;
    group_line_up1.add(lineup5);
    lineup5.position.y = -2 ;
    group_line_up1.add(lineup6);
    lineup6.position.y = -2.5 ;
    group_line_up1.add(lineup7);
    lineup7.position.y = -3 ;
    group_line_up1.add(lineup8);
    lineup8.position.y = -3.5 ;

    const group_line_up2 = group_line_up1.clone();
    // ************************ //

    // ******* LINES-DOWN ******* //
    const group_line_down1 = new THREE.Group();
    const linedown1 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 2), red);
    const linedown2 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 2), red);

    group_line_down1.add(linedown1);
    group_line_down1.add(linedown2);
    linedown2.position.y = -0.5 ;

    // ************************** //

    // ******* NOSE ******* //

    const nose = new THREE.Group();
    const nostrils = new THREE.Mesh(new THREE.BoxGeometry(6, 2, 2), red);
    const middle_nose = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.5, 2), red);
    const up_nose1 = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.8, 2), grey_light);
    const up_nose2 = new THREE.Mesh(new THREE.BoxGeometry(2, 0.8, 2), grey_light);
    const up_nose3 = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.8, 2), grey_light);
    const up_nose4 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.8, 2), grey_light);
    const up_nose5 = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.6, 2), grey_light);

    nose.add(nostrils);
    nose.add(middle_nose);
    middle_nose.position.y = 1.25 ;
    nose.add(up_nose1);
    up_nose1.position.y = 2.4;
    nose.add(up_nose2);
    up_nose2.position.y = 3.2;
    nose.add(up_nose3);
    up_nose3.position.y = 4;
    nose.add(up_nose4);
    up_nose4.position.y = 4.8;
    nose.add(up_nose5);
    up_nose5.position.y = 5.5;

    // ******************** //

    // ******* MOUTH ******* //

    const mouth = new THREE.Group();
    const back_mouth1 = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 3), black);
    const back_mouth2 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), black);
    const back_mouth3 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), black);
    const teeth1 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.5, 2.5), white);
    const teeth2 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.5, 2.5), white);

    mouth.add(back_mouth1);
    mouth.add(back_mouth2);
    back_mouth2.position.x = -4.25;
    back_mouth2.position.y = 1.5;
    mouth.add(back_mouth3);
    back_mouth3.position.x = 4.25;
    back_mouth3.position.y = 1.5;
    mouth.add(teeth1);
    teeth1.position.x = .75;
    teeth1.position.y = .25;
    mouth.add(teeth2);
    teeth2.position.x = -.75;
    teeth2.position.y = .25;

    const lips = new THREE.Group();
    const up_lips = new THREE.Mesh(new THREE.BoxGeometry(6, 1, 2.5), red);
    const down_lips = new THREE.Mesh(new THREE.BoxGeometry(6, 1, 2.5), red);
    const left_lips1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const left_lips2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const left_lips3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const left_lips4 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const left_lips5 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const left_lips6 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const left_lips7 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const right_lips1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const right_lips2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const right_lips3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const right_lips4 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const right_lips5 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const right_lips6 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);
    const right_lips7 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2.5), red);

    lips.add(up_lips);
    up_lips.position.y = 1.5;
    lips.add(down_lips);
    down_lips.position.y = -2;
    lips.add(left_lips1);
    left_lips1.position.x = -3.5;
    left_lips1.position.y = 2;
    lips.add(left_lips2);
    left_lips2.position.x = -4.5;
    left_lips2.position.y = 2.5;
    lips.add(left_lips3);
    left_lips3.position.x = -3.25;
    left_lips3.position.y = -1;
    lips.add(left_lips4);
    left_lips4.position.x = -4;
    left_lips4.position.y = 0;
    lips.add(left_lips5);
    left_lips5.position.x = -4.75;
    left_lips5.position.y = 1;
    lips.add(left_lips6);
    left_lips6.position.x = -5.5;
    left_lips6.position.y = 2;
    lips.add(left_lips7);
    left_lips7.position.x = -5.5;
    left_lips7.position.y = 2.5;
    lips.add(right_lips1);
    right_lips1.position.x = 3.5;
    right_lips1.position.y = 2;
    lips.add(right_lips2);
    right_lips2.position.x = 4.5;
    right_lips2.position.y = 2.5;
    lips.add(right_lips3);
    right_lips3.position.x = 3.25;
    right_lips3.position.y = -1;
    lips.add(right_lips4);
    right_lips4.position.x = 4;
    right_lips4.position.y = 0;
    lips.add(right_lips5);
    right_lips5.position.x = 4.75;
    right_lips5.position.y = 1;
    lips.add(right_lips6);
    right_lips6.position.x = 5.5;
    right_lips6.position.y = 2;
    lips.add(right_lips7);
    right_lips7.position.x = 5.5;
    right_lips7.position.y = 2.5;

    mouth.add(lips);

    // ********************* //

    group_head.add(group_eye_left);
    group_head.add(group_eye_right);
    group_head.add(group_line_up1);
    group_head.add(group_line_up2);
    group_head.add(group_line_down1);
    group_head.add(nose);
    group_head.add(mouth);
    group_eye_left.position.set(-8, 6.5, 10.01);
    group_eye_right.position.set(8, 6.5, 10.01);
    group_line_up1.position.set(8, 14.5, 10.1);
    group_line_up2.position.set(-8, 14.5, 10.1);
    group_line_down1.position.set(-8, 1.5, 10.1);
    nose.position.set(0, -2.5, 10.1);
    mouth.position.set(0, -7, 10.1);

    group_head.traverse(m => m.castShadow = true);

    return group_head;
}
